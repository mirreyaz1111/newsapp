
import React from 'react'

const NewsFilters = ({ sources = [] as any, setSelectedSource = (value: string) => { }, searchTerm = '', setSearchTerm = (value: string) => { } }) => {
    return (
        <div className="search-filter">
            <input className="search-bar" type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm?.(e.target.value)} />
            <select className="source-filter" onChange={e => setSelectedSource?.(e.target.value)}>
                <option value="All">All Sources</option>
                {sources.map((src: any) => <option key={src.name} value={src.name}>{src.name}</option>)}
            </select>
        </div>

    )
}

export default NewsFilters